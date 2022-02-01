import * as InboxSDK from '@inboxsdk/core';

const renderEmail = (name) => {
return `Hi ${name},

${process.env.EMAIL_BODY}

${process.env.EMAIL_SIGNATURE}`;
}

InboxSDK.load(2, process.env.APP_ID).then((sdk) => {
    sdk.Compose.registerComposeViewHandler((composeView) => {
        composeView.addButton({
            title: 'Quick Reply!',
            iconUrl:
                "https://lh5.googleusercontent.com/itq66nh65lfCick8cJ-OPuqZ8OUDTIxjCc25dkc4WUT1JG8XG3z6-eboCu63_uDXSqMnLRdlvQ=s128-h128-e365",
            onClick(event) {
                const name = composeView.getToRecipients()[0].name.split(' ')[0];
                event.composeView.insertTextIntoBodyAtCursor(renderEmail(name))
                event.composeView.send({});
            },
        });

        composeView.addButton({
            title: 'Quick Reply, dry run',
            iconUrl:
                "https://lh5.googleusercontent.com/itq66nh65lfCick8cJ-OPuqZ8OUDTIxjCc25dkc4WUT1JG8XG3z6-eboCu63_uDXSqMnLRdlvQ=s128-h128-e365",
            onClick(event) {
                const name = composeView.getToRecipients()[0].name.split(' ')[0];
                event.composeView.insertTextIntoBodyAtCursor(renderEmail(name));
            },
        });
    });
});
