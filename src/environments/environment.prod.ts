export const environment = {

    production: true,

    API_BASE: 'https://api.k8qs.com'

};


$(document).ready(function () {

    let guilds = { ...{
    {
        guilds;
    }
}
}
    ;
    console.log(guilds);

    $('#guildSelection').change(function () {

        let value = $(this).val();
        let html = '<option> </option>';

        if (value) {

            const select = $('#guildSelection');

            select.empty();

            guilds.forEach(function (guild) {

                guild.channels.forEach(function (channel) {

                    select.append('<option value="' + channel.id + '">' + channel.name + '</option>');

                });

            });

        }

    });

});

class A {
    constructor() {
        this.a();
    }

    a() { // returns nothing ---^

        try {

            this.b();

            console.log(1); // this will NOT be called

        } catch (e) {

            /// do nothing

        }

    }

    b() {
        throw 'this does nothging';
    }

}
