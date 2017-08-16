Create directory for "client of module"
initialize with npm init
If desired use "npm install library" to fetch public libraries
If not already existing, create node_modules/ directory
In node_modules directory, create directory for my library
in my library directory npm init (again :)
create library, adding key data to "exports" object
in main project require("mylibrary") and assign result to a local var...
