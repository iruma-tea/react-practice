const member = {
    name: '佐藤理央',
    greet: function() {
        console.log(`こんにちは${this.name}さん!`);
    }
};

member.greet();