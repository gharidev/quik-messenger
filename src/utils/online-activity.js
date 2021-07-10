import { rtdb } from '../db'
import firebase from 'firebase'

var isOfflineForDatabase = {
    online: false,
    last_changed: firebase.database.ServerValue.TIMESTAMP,
};

var isOnlineForDatabase = {
    online: true,
    last_changed: firebase.database.ServerValue.TIMESTAMP,
};

var that;
class OnlineListener {
    constructor(user) {
        that = this;
        this.connectionRef = rtdb.ref('.info/connected');
        this.user = user;
        this.connectionListener = this.connectionRef.on('value', this.onConnection);
    }

    setUserOnline(e) {
        that.userStatusDatabaseRef.set(isOnlineForDatabase);
        console.log(e);
    }

    setUserOffline(e) {
        that.userStatusDatabaseRef.set(isOfflineForDatabase);
        console.log(e);
    }

    onConnection(snapshot) {
        console.log('Connection Change Detected', snapshot.val());
        if (snapshot.val() == false) {
            return;
        }
        that.userStatusDatabaseRef = rtdb.ref('/status/' + that.user.uid);
        that.userStatusDatabaseRef.onDisconnect().set(isOfflineForDatabase,).then(function () {
            console.log('Setted onDisconnect');
            that.setUserOnline();
        });
        window.addEventListener('blur', that.setUserOffline, false);
        window.addEventListener('focus', that.setUserOnline, false)
    }

    dispose() {
        that = null;
        if (!this.connectionListener) return;
        this.connectionRef.off('value', this.onConnection);
        window.removeEventListener('blur', that.setUserOffline)
        window.removeEventListener('focus', that.setUserOnline)
        if (!this.userStatusDatabaseRef) return;
        this.userStatusDatabaseRef.onDisconnect().cancel();
        this.userStatusDatabaseRef.set(isOfflineForDatabase);
        console.log('OnlineListener Disposed');
    }

}

export { OnlineListener }