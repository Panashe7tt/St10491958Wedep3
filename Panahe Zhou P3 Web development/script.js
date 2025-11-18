// =============================================
// GOOGLE MAPS FUNCTIONALITY - FIXED VERSION
// =============================================

// Global variable to track map initialization
let mapInitialized = false;

function initMap() {
    console.log('initMap function called');
    
    const mapContainer = document.getElementById('map');
    if (!mapContainer) {
        console.error('Map container not found');
        return;
    }

    // Create map container with proper styling
    mapContainer.innerHTML = `
        <div class="map-content">
            <h3>📍 Our Location in Port Elizabeth</h3>
            <div class="map-instructions">
                <p><strong>Interactive Map:</strong> Zoom, drag, and explore our location</p>
            </div>
            <div id="googleMap" style="width:100%; height:500px; border-radius:10px;"></div>
            <div class="map-details">
                <p><strong>🏢 Booysen Park Shopping Center</strong></p>
                <p>Port Elizabeth, Eastern Cape, South Africa</p>
                
                <div class="contact-details">
                    <p>📞 <strong>Contact Numbers:</strong></p>
                    <p>Othamu: <a href="tel:+27731687049">+27 73 168 7049</a></p>
                    <p>Panashe: <a href="tel:+27780204350">+27 78 020 4350</a></p>
                    <p>📧 <strong>Email:</strong> info@siyazamaconstruction.co.za</p>
                </div>
                
                <div class="service-hours">
                    <h4>🕒 Service Hours</h4>
                    <p>Monday - Friday: 7:00 AM - 5:00 PM</p>
                    <p>Saturday: 8:00 AM - 1:00 PM</p>
                    <p>Emergency Services: 24/7 Available</p>
                </div>

                <div class="map-actions">
                    <a href="https://www.google.com/maps/dir//Booysen+Park+Shopping+Center,+Port+Elizabeth" 
                       target="_blank" 
                       class="cta-button">
                       🗺️ Get Directions
                    </a>
                </div>
            </div>
        </div>
    `;

    // Initialize Google Maps
    setTimeout(loadGoogleMap, 100);
}

function loadGoogleMap() {
    console.log('loadGoogleMap function called');
    
    // Check if Google Maps API is available
    if (typeof google === 'undefined') {
        console.error('Google Maps API not loaded');
        showStaticMap();
        return;
    }

    const mapElement = document.getElementById('googleMap');
    if (!mapElement) {
        console.error('Google Map element not found');
        showStaticMap();
        return;
    }

    try {
        // Coordinates for Booysen Park Shopping Center, Port Elizabeth
        const location = { lat: -33.9249, lng: 25.5701 };
        
        const map = new google.maps.Map(mapElement, {
            zoom: 16,
            center: location,
            mapTypeControl: true,
            streetViewControl: true,
            zoomControl: true,
            fullscreenControl: true,
            scaleControl: true,
            rotateControl: true,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            styles: [
                {
                    "featureType": "all",
                    "elementType": "geometry",
                    "stylers": [{ "color": "#f5f5f5" }]
                },
                {
                    "featureType": "all",
                    "elementType": "labels.text.fill",
                    "stylers": [{ "color": "#666666" }]
                },
                {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [{ "color": "#c9c9c9" }]
                },
                {
                    "featureType": "poi",
                    "elementType": "geometry",
                    "stylers": [{ "color": "#eeeeee" }]
                },
                {
                    "featureType": "road",
                    "elementType": "geometry",
                    "stylers": [{ "color": "#ffffff" }]
                }
            ]
        });

        // Custom marker with construction theme
        const marker = new google.maps.Marker({
            position: location,
            map: map,
            title: 'Siyazama Civil Construction - Booysen Park Shopping Center',
            animation: google.maps.Animation.DROP,
            icon: {
                url: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiByeD0iMjAiIGZpbGw9IiMzMzBGRDEiLz4KPHBhdGggZD0iTTIwIDI4QzI0LjQxODMgMjggMjggMjQuNDE4MyAyOCAyMEMyOCAxNS41ODE3IDI0LjQxODMgMTIgMjAgMTJDMTUuNTgxNyAxMiAxMiAxNS41ODE3IDEyIDIwQzEyIDI0LjQxODMgMTUuNTgxNyAyOCAyMCAyOFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xOC41IDE3SDE2VjE1SDE4LjVWMTdaTTI0IDE3SDIxLjVWMTVIMjRWMTdaTTE4LjUgMjJIMTYgVjIwSDE4LjVWMjJaTTI0IDIySDIxLjVWMjBIMjRWMjJaIiBmaWxsPSIjMzMwRkQxIi8+Cjwvc3ZnPg==',
                scaledSize: new google.maps.Size(40, 40),
                anchor: new google.maps.Point(20, 40)
            }
        });

        // Info Window that opens automatically
        const infoWindow = new google.maps.InfoWindow({
            content: `
                <div style="padding: 15px; max-width: 250px;">
                    <h3 style="margin: 0 0 10px 0; color: #330FD1; font-size: 16px;">🏗️ Siyazama Civil Construction</h3>
                    <p style="margin: 5px 0; font-size: 14px;"><strong>📍 Address:</strong></p>
                    <p style="margin: 0 0 10px 0; font-size: 14px;">Booysen Park Shopping Center<br>Port Elizabeth, Eastern Cape</p>
                    <p style="margin: 5px 0; font-size: 14px;"><strong>📞 Contact:</strong></p>
                    <p style="margin: 0 0 5px 0; font-size: 14px;">Othamu: +27 73 168 7049</p>
                    <p style="margin: 0 0 10px 0; font-size: 14px;">Panashe: +27 78 020 4350</p>
                    <a href="https://www.google.com/maps/dir//Booysen+Park+Shopping+Center,+Port+Elizabeth" 
                       target="_blank" 
                       style="display: inline-block; background: #330FD1; color: white; padding: 8px 15px; text-decoration: none; border-radius: 5px; font-size: 12px; margin-top: 10px;">
                       🗺️ Get Directions
                    </a>
                </div>
            `,
            maxWidth: 300
        });

        // Open info window automatically when map loads
        infoWindow.open(map, marker);

        // Also open on marker click
        marker.addListener('click', function() {
            infoWindow.open(map, marker);
        });

        // Add map event listeners for better UX
        map.addListener('zoom_changed', function() {
            console.log('Map zoom level:', map.getZoom());
        });

        map.addListener('center_changed', function() {
            console.log('Map center:', map.getCenter());
        });

        mapInitialized = true;
        console.log('Google Maps loaded successfully');

    } catch (error) {
        console.error('Error loading Google Maps:', error);
        showStaticMap();
    }
}

function showStaticMap() {
    console.log('Showing static map fallback');
    const mapContainer = document.getElementById('googleMap');
    if (!mapContainer) return;

    mapContainer.innerHTML = `
        <div style="width:100%; height:500px; background:linear-gradient(135deg, #667eea 0%, #764ba2 100%); display:flex; align-items:center; justify-content:center; color:white; border-radius:10px; text-align:center; position:relative;">
            <div>
                <h3 style="margin-bottom:15px;">📍 Interactive Map Loading...</h3>
                <p><strong>Booysen Park Shopping Center</strong></p>
                <p>Port Elizabeth, Eastern Cape</p>
                <div style="margin-top:20px;">
                    <a href="https://www.google.com/maps/place/Booysen+Park+Shopping+Center/@-33.9249,25.5701,15z" 
                       target="_blank" 
                       style="color:white; text-decoration:underline; background:rgba(255,255,255,0.2); padding:10px 20px; border-radius:5px; display:inline-block;">
                       🗺️ View on Google Maps
                    </a>
                </div>
                <p style="margin-top:15px; font-size:14px; opacity:0.8;">If map doesn't load, click above link</p>
            </div>
        </div>
    `;
}

// Fallback initialization if Google Maps API fails
function initializeMapFallback() {
    console.log('Initializing map fallback');
    if (!mapInitialized) {
        setTimeout(() => {
            if (!mapInitialized) {
                console.log('Google Maps API timeout - using fallback');
                showStaticMap();
            }
        }, 5000); // 5 second timeout
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded - initializing map fallback');
    initializeMapFallback();
});

// Export functions for global access
window.initMap = initMap;
window.loadGoogleMap = loadGoogleMap;
window.showStaticMap = showStaticMap;