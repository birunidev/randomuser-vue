let vm = new Vue({
    el: '#app',
    data: {
        users: [],
        form: '',
    },
    created: function () {
        fetch('https://randomuser.me/api/?results=10&gender=male')
            .then(res => res.json())
            .then(res => {
                this.users = res.results
            });
    }
})