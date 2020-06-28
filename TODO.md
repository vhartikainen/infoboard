Installation:
-------------
- Provision the MagicMirror updates with an automated IaC way
- Enable autostarting the MagicMirror (systemd script - as with RuuviCollector)
- Install home-assistant.io

Updating 
--------
- **MagicMirror:**
    - git pull && npm install

Development and testing
-----------------------
- Development on top of docker? 
- Create PR for support for serveronly local testing locally: 
    - watch -> package.json npm install watch
    - watch 'node serveronly' ../MagicMirror/config


New features
------------
- RuuviTag collector [https://blog.ruuvi.com/rpi-gateway-6e4a5b676510]
    - https://github.com/Scrin/RuuviCollector
- InfluxDB number display : execute query and show last result