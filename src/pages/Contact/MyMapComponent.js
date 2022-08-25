/* eslint-disable no-undef */
const mapStyles = [
    {
        "featureType": "administrative",
        "elementType": "all",
        "stylers": [
            {
                "saturation": 0
            }
        ]
    },
    {
        "featureType": "administrative.province",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "shown"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 0
            },
            {
                "visibility": "shown"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 0
            },
            {
                "visibility": "shown"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 0
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "lightness": 50
            },
            {
                "visibility": "shown"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "all",
        "stylers": [
            {
                "lightness": 75
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "all",
        "stylers": [
            {
                "lightness": 75
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -75
            },
            {
                "visibility": "shown"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "lightness": -45
            },
            {
                "saturation": -100
            }
        ]
    },
];

const MyMapComponent = () => {
    const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 32.80181, lng: -117.23606 },
        zoom: 12,
        gestureHandling: 'greedy',
        styles: mapStyles,
        disableDefaultUI: true
    });

    const icon = {
        url: process.env.PUBLIC_URL + "/images/mapMarker.png",
        scaledSize: new google.maps.Size(35, 40),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(15, 35)
    };

    const marker = new google.maps.Marker({
        position: { lat: 32.80181, lng: -117.23606 },
        map: map,
        icon: icon,
        animation: google.maps.Animation.DROP,
        mapTypeControl: true,
        url: 'https://www.google.com/maps/place/LNY+Optometry/@32.8017087,-117.2361286,20z/data=!4m5!3m4!1s0x0:0x74f38bc5744bcebb!8m2!3d32.801812!4d-117.236056'
    });

    google.maps.event.addListener(marker, 'click', function () {
        window.open(marker.url, '_blank');
    });

    return null;
};

export default MyMapComponent;
