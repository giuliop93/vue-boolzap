const app = new Vue ({
    el: "#vueContainer",
    data: {
        contacts: allContacts,
        activeContact:{},
    },
    methods: {
        selectContact(contatto){
            this.activeContact = contatto;
           
        }
    }   
})