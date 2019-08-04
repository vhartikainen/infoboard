# infoboard
This repository provides a basic setup for my Personal Infoboard setup that is based on Magic Mirror 2 [https://magicmirror.builders/].

Installation:
-------------
- **Raspbian OS:** 
    1. first DL base Raspbian OS: [https://www.raspberrypi.org/downloads/raspbian/]
    2. Copy the image to SD Card: 
        - diskutil list
        - diskutil unmountDisk /dev/disk2
        - sudo dd bs=1m if=image.img of=/dev/rdisk2 conv=sync
        - sudo diskutil eject /dev/rdisk2
- **Additional packages required:**
    - Logitech Unifying controller, solaar: sudo apt-get install solaar
    - (fswatch utility: sudo apt-get install fswatch)
    - RuuviCollector: 
        ```
        sudo apt-get install maven bluez bluez-hcidump
        sudo apt-get install influxdb influxdb-client
        # Download -> https://grafana.com/grafana/download/5.2.0-beta1?platform=arm
        wget https://s3-us-west-2.amazonaws.com/grafana-releases/release/grafana_5.2.0-beta1_armhf.deb 
        sudo dpkg -i grafana_5.2.0-beta1_armhf.deb 
        ```
- **X windows modifications**: For the touchscreen
- **MagicMirror setup:**
    - curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
    - sudo apt install -y nodejs
    - git clone https://github.com/MichMich/MagicMirror
    - cd MagicMirror/
    - npm install && npm start **OR** npm install && node serveronly
        - Via SSH: DISPLAY=:0 nohup npm start &
- **MagicMirror modules setup:**
    - cd MagicMirror/modules
    ```
    # NASA image
    git clone https://github.com/mykle1/MMM-NASA

    # NASA image of the day
    git clone https://github.com/nebulx29/MMM-nasaastropic
    cd MMM-nasaastropic
    npm install

    # Spotify controller
    git clone https://github.com/eouia/MMM-Spotify
    cd MMM-Spotify
    npm install
    ```
- **RuuviCollector setup:**
    - https://github.com/Scrin/RuuviCollector
    ```
    git clone https://github.com/Scrin/RuuviCollector
    cd RuuviCollector
    mvn clean package
    #rm -r ~/.m2
    # InfluxDB setup
    influx 
    CREATE DATABASE ruuvi
    # Grafana
    sudo /bin/systemctl daemon-reload
    sudo /bin/systemctl enable grafana-server
    sudo /bin/systemctl start grafana-server
    sudo /bin/systemctl status grafana-server
    # RuuviCollector
    sudo setcap 'cap_net_raw,cap_net_admin+eip' `which hcitool`
    sudo setcap 'cap_net_raw,cap_net_admin+eip' `which hcidump`
    ```


- bash -c "$(curl -sL https://raw.githubusercontent.com/MichMich/MagicMirror/master/installers/raspberry.sh)"


Updating 
--------
- **MagicMirror:**
    - git pull && npm install


Development and testing
-----------------------
- **MagicMirror**
    - Can be run locally
    ```
    git clone https://github.com/MichMich/MagicMirror MagicMirror_git
    cd MagicMirror_git
    npm install
    while true; do
            fswatch -o -r -0 ../MagicMirror/config | node serveronly
    done
    ```
    - Can be run inside a docker container
    ```
    docker run  -d \
	--publish 8888:8080 \
	--restart always \
	--volume $(pwd)/MagicMirror/config:/opt/magic_mirror/config \
	--name magic_mirror \
	bastilimbach/docker-magicmirror
    ```

   
