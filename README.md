# Dy.fi Updater.js
This is a Node.js based application for updating dy.fi domains

## Config.js
### Hostname
This property tells the application the hostname you wish to update
### UpdateInterval
This property tells the application the time interval (in days) to send an update request to Dy.fi
### EnvCreds
When EnvCreds is set to true, the application will use the credentials stored in the DYFI_USER and DYFI_KEY environmental variables to authorize the update
### User and Key
When EnvCreds is set to false, the application uses thest credentials to authorize the update