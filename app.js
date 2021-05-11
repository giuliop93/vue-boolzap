const app = new Vue({
    el: "#vueContainer",
    data: {
        contacts: allContacts,
        activeContact: {},
        newMessage: "",
        searchText: "",
        filteredContacts: []

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
            this.newMessage = '';
            
            // this.autoscroll();

            // risposta del pc
            setTimeout(function() {
                let pcMesssage = {
                    date: moment().format('DD/MM/YYYY HH:mm:ss'),
                    message: 'ok',
                    status: 'received'
                };
                currentChat.push(pcMesssage);

                // app.autoscroll();

            }, 1000);
        },

        getImage(avatar) {
            return "../imgs/avatar" + avatar + ".jpg";
        },
        getTime(dateString) {
            return moment(dateString, "DD/MM/YYYY HH:mm:ss").format('HH:mm');
        },
        onInput() {
            console.log(this.searchText);

            var result;
            this.filteredContacts = []
            // Filtro a partire dall'array contacts, come faccio? 
            this.contacts.forEach((contact) => {
                let contactName = contact.name.toLowerCase();
                let searchedName = this.searchText.toLowerCase();
                if (contactName.includes(searchedName)) {
                    this.filteredContacts.push(contact)
                }
                //     // contact.visible = true;
                // } else {
                //     contact.visible = false;
                // }
                


            });
            console.log(this.filteredContacts);
        },
    },
    mounted() {
        this.filteredContacts = this.contacts;
    }
})