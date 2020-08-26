class User{
    constructor(){
        this.email = null;
        this.num = null;
        this.timemsg=[];
    }
    getUserCount(){
        var userCountRef = database.ref('userCount')
        userCountRef.on("value",function(data){
            userCount = data.val();
        })
    }
    updateCount(count){
        database.ref('/').update({
            userCount: count
        })
    }
    update(){
        var userIndex = "users/user" + this.num;
        database.ref(userIndex).set({
            email:this.email,
            timemsg:this.timemsg,

        })
    }
}