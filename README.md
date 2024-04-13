# Dy.fi Updater.js
This is a Node.js based application for updating dy.fi domains

## config.json
Here are the properties that config.json supports:
### Hostname
This property tells the application the hostname you wish to update
### UpdateInterval
This property tells the application the time interval (in days) to send an update request to Dy.fi
### EnvCreds
When EnvCreds is set to true, the application will use the credentials stored in the DYFI_USER and DYFI_KEY environment variables to authorize the update
### User, Key
When EnvCreds is set to false, the application uses thest credentials to authorize the update