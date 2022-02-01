This extension creates a button in the compose view that sends a pre-canned reply, while including the sender's name.

## Instructions

```sh
npm install
```

```sh
export EMAIL_BODY="Thanks for emailing me"
export EMAIL_SIGNATURE="Michael"

num run build
```

Given an email from Paul Ruster, this results in:

> Hi Paul,
>
> Thanks for emailing me
>
> Michael
