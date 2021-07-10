import store from '../store'
import { rtdb } from '../db'
import router from '../router';

function setUserToChat(chats, data) {
    if (!data) return;
    const chat = chats.find((c) => c.users.includes(data.uid));
    if (chat)
        store.commit("setChatUsers", {
            chatId: chat.id,
            userData: data,
        })
}

export const chatsWatcher = (chats) => {
    if (!chats) return;
    const userIds = chats.map((chat) => {
        return chat.users.find(
            (u) => u != store.getters.currentUser.uid
        );
    });
    const chatIds = chats.map(c => c.id);
    if (router.currentRoute.name == 'Chat' && !chatIds.includes(router.currentRoute.params.id)) router.replace({ name: 'Chats' })
    if (userIds.length == 0) return;
    const prevUserIds = Object.values(store.state.chatUsers).map(
        (u) => u.uid
    );

    var difference = userIds;
    if (prevUserIds.length > 0) {
        difference = userIds.filter((u) => !prevUserIds.includes(u));
        if (difference.length == 0) {
            chats.forEach(c => {
                if (!Object.keys(store.state.chatUsers).includes(c.id)) {
                    const user = Object.values(store.state.chatUsers).find(u => u.uid == c.users.find(_u => _u != store.getters.currentUser.uid));
                    setUserToChat(chats, user);
                }
            });
            return;
        }
    }
    difference.forEach((uid) => {
        const userRef = rtdb.ref("users/" + uid);
        userRef.once("value", (data) => {
            if (data.exists()) {
                setUserToChat(chats, data.val());
            }
        });
    });
}