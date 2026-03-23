Custom Discord Bot in dev.

## Slash Commands

### Tuning Commands
- `/tune-downforce`
- `/tune-camberthrust`
- `/tune-transmission`
- `/tune-differential`
- `/race-restrictions`

### Support Commands
- `/contact-support`
- `/write-a-review`
- `/feature-request`

### Race Hosting Command
- `/host-a-race`

`/host-a-race` takes:
- Lobby Title
- Type (Race / Funzies / Drift)
- Track
- Time (PST)
- PSN Name (optional)
- Class (optional)
- Tyre (optional)
- Damage (optional)
- Prohibited (optional)
- Notes (optional)

Each support command requires a `message` option and is intended for user input that should be routed to admins.

## Support Command Behavior

- Support commands are restricted to `#support`.
- If used outside `#support`, the user is notified via DM and an admin log is posted.
- Valid support submissions are forwarded to `#admin`.
- Users receive a thank-you confirmation via DM.
- In-channel acknowledgements are not shown to users.

## Host-a-Race Behavior

- `/host-a-race` is restricted to `#host-a-race`.
- If used in the correct channel, the bot posts the formatted lobby details to `#host-a-race`.
- Each use is logged to `#admin`.
- If posting fails, the bot DMs the user and logs the error to `#admin`.

## Environment Variables

Required:
- `DISCORD_TOKEN`
- `DISCORD_PUBLIC_KEY`
- `DISCORD_APPLICATION_ID`

Recommended channel overrides:
- `DISCORD_SUPPORT_CHANNEL_ID` (used instead of searching for `#support`)
- `DISCORD_ADMIN_CHANNEL_ID` (used instead of searching for `#admin`)
- `DISCORD_HOST_A_RACE_CHANNEL_ID` (used instead of searching for `#host-a-race`)

## Register Commands

Before running locally, copy the env template:

`cp .dev.vars.example .dev.vars`

After adding or changing slash commands, re-register them with:

`npm run register`