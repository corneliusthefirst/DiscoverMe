	* in the command line, enter:
		keytool -exportcert -list -v -alias androiddebugkey -keystore ~/.android/debug.keystore

	*  when prompted for password, enter:
		android

	* you should successfully generate some keys.
	* copy the "SHA1:" key
	* visit firestore console in your browser
	* under settings>>Project settings select "RN Starter Kit Android"
	* click "add fingerprint"
	* paste the copied "SHA1:" key

	* then rebuild app