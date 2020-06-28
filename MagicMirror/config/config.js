/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "0.0.0.0", // Address to listen on, can be:
	                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	                      // - another specific IPv4/6 to listen on a specific interface
	                      // - "", "0.0.0.0", "::" to listen on any interface
	                      // Default, when address config is left out, is "localhost"
	port: 8800,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1" , "172.17.0.0/24", "192.168.1.0/24"], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "fi",
	timeFormat: 24,
    units: "metric",
    
	modules: [
        // {
        //     module: 'MMM-InfluxGraph',
        //     position: 'bottom_left',
        //     config: {
        //             updateInterval: 6*60*60*1000,
        //             animationSpeed: 0,
        //             header: 'NASA Astronomy Picture',
        //             maxlongedge: 300
        //     }
        // },
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left"
		},
		{
			module: "calendar",
			header: "Pyhäpäivät",
			position: "top_left",
			config: {
                fullDayEventDateFormat: "ddd L",
                timeFormat: "absolute",
				calendars: [
					{
                        // http://www.webcal.fi/fi-FI/muut_tiedostomuodot.php
						url: "webcal://www.webcal.fi/cal.php?id=1&format=ics&start_year=current_year&end_year=next_year&tz=Europe%2FHelsinki"					}
				]
			}
        },
		{
			module: 'MMM-iFrame',
			position: 'top_center',	// This can be any of the regions.
			config: {
				// See 'Configuration options' for more information.
					url: ["http://raspi:3000/d-solo/Wb34_vzgk/temperature?orgId=1&panelId=2"],  // as many URLs you want or you can just ["ENTER IN URL"] if single URL.
					updateInterval: 0.5 * 60 * 1000, // rotate URLs every 30 seconds
					width: "400", // width of iframe
					height: "400", // height of iframe
					frameWidth: "400" // width of embedded iframe, height is beeing calculated by aspect ratio of iframe
			}
		},
        {
            module: 'MMM-nasaastropic',
            position: 'top_right',
            config: {
				updateInterval: 6*60*60*1000,
				animationSpeed: 0,
				header: 'NASA Astronomy Picture',
				maxlongedge: 300
            }
        },
		{
			module: "currentweather",
			position: "top_right",
			config: {
				location: "Lahti, Finland",
				locationID: "",  //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				appid: "40673375ea46833c3c0a79f3294d4f7c"
			}
		},
		{
			module: "weatherforecast",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				location: "Lahti, Finland",
				locationID: "",  //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				appid: "40673375ea46833c3c0a79f3294d4f7c"
			}
		},
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "New York Times",
						url: "http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		}
	]
        // {
        //     module: 'MMM-NASA',
        //     position: 'top_center',
        //     config: {
		// 		search: "Galaxy",                // See Config entries for search: (Bottom of ReadMe)
		// 		infoLength: 400,                 // length of info (mostly for static info)
		// 			scroll: "no",                   // yes= scrolling info, no = static info
		// 		rotateInterval: 1 * 60000,       // 5 minutes default. Must use ms (milliseconds)
		// 		useHeader: false,
		// 		header: "",
		// 		maxWidth: "400px",               // For description text. Image size using css file.
		// 		animationSpeed: 3000,            // Image fades in and out
        //     }
        // },
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
