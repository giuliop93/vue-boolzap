const app = new Vue({
    el: "#app",
    data: {
        //usersList
        classToBind: "text-red",
        numero: 5,
        itemsList: [{
            text: "Ciao",
            messages: [
                {
                    text: "",
                    sender: ""
                },
                {
                    text: "",
                    sender: ""
                }
            ]
        }],
        inputText: "testo iniziale",
        inputCheckbox: true,
        inputRadio: "",
        inputTextArea: ""
    },
    computed: {
        divClasses() {
            return {
                'text-red': this.numero > 6,
                'text-yellow': this.numero > 2 && this.numero < 5
            };
        }
    },
    methods: {
        getDivClasses(item) {


            return {
                'text-red': this.numero > 6,
                'text-yellow': this.numero > 2 && this.numero < 5
            };
        },
        getDataFromServer() { }
    },

    mounted: function () {
        this.getDataFromServer();
        //this.numer = 6;

    },
})