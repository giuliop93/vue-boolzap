const app = new Vue({
    el: "#vueContainer",
    data: {
        contacts: allContacts,
        activeContact: {},
        newMessage: '',

    },
    methods: {
        selectContact(contatto) {
            this.activeContact = contatto;

        },
        sendMessage() {
            let newMessage_obj = {
                date: moment().format('DD/MM/YYYY HH:mm:ss'),
                message: this.newMessage,
                status: 'sent'
            };
            let currentChat = this.activeContact.messages;
            currentChat.push(newMessage_obj);
        },
        getImage(avatar) {
            return "../imgs/avatar" + avatar + ".jpg";
        },
    }
})