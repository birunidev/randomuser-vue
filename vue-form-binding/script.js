let vm = new Vue({
    el: '#app',
    data: {
        name: '',
        isError: '',
        friends: ['John', 'Mike', 'Steve']
    },
    methods: {
        addFriend: function () {
            if (this.name !== '') {
                let copyFriends = [...this.friends];
                console.log(copyFriends)
                copyFriends.push(this.name);

                this.friends = copyFriends;
            } else {
                this.isError = 'Field is empty'
            }
        }
    }
})