---
title: Bottlenose WiFi Orca - Getting Started Guide
description: "Quick start guide for Bottlenose WiFi Orca. Learn to set up your first WiFi project, connect to networks, and communicate with FREE-WILi in under 30 minutes."
keywords: [Bottlenose getting started, ESP32-C6 tutorial, WiFi quick start, first project, Bt tutorial, network setup]
sidebar_position: 1
sidebar_label: Bottlenose Getting Started
---

# Bottlenose Getting Started Guide

Get up and running with your Bottlenose WiFi Orca in under 30 minutes! This guide will walk you through your first project: connecting to WiFi, sending data, and communicating with FREE-WILi.

## What You'll Build

By the end of this guide, you'll have a working WiFi system that:
- Connects to your WiFi network automatically
- Sends periodic status updates over WiFi
- Communicates with FREE-WILi via UART
- Displays connection status via LEDs

## Prerequisites

Before starting, make sure you have:
- Bottlenose WiFi Orca properly connected to FREE-WILi (see [Hardware Hookup](/extending-with-orcas/bottlenose-wifi-orca/bottlenose-hardware-hookup/))
- FREE-WILi device with latest firmware installed
- Computer connected to FREE-WILi (via USB or network)
- **UART Orca Communication enabled** for Bottlenose (see Step 1 below)

:::warning UART Communication Required
**CRITICAL**: You must enable UART Orca Communication for Bottlenose in FREE-WILi settings before the module will function. Bottlenose will not work without this setting enabled.
:::

---

## Step 1: Enable UART Orca Communication

Before flashing firmware or using Bottlenose, you must first enable UART Orca Communication in FREE-WILi settings.

### Accessing Orca Setup Settings

1. **Connect to FREE-WILi** via USB console or web interface
2. **Navigate to Settings** menu from main console
3. **Find Orca Setup** section in settings
4. **Access Configure Orca Communication** option

### Configure UART Communication

In the Orca Setup menu, you'll see:

```
========  Configure Orca Communication ========

u) Orca Communication over UART [WILEye]


Enter Letter: (q to exit)
```

1. **Press 'u'** to configure UART communication
2. **Select Bottlenose option** from the menu:

```
========  Configure Orca Communication ========

0) Off
1) BottleNose
2) WhaleTail
3) WILEye

Orca Communication over UART Enter Number [3]
```

3. **Enter '1'** to select BottleNose
4. **Save settings** and exit configuration menu

### Verify Configuration

After setting UART communication to BottleNose:

```
========  Configure Orca Communication ========

u) Orca Communication over UART [BottleNose] ✅
```

The setting should now show **[BottleNose]** instead of the default **[WILEye]**.

:::tip Why This Setting Matters
The UART Orca Communication setting tells FREE-WILi which type of Orca module is connected and how to communicate with it. Each Orca module (BottleNose, WhaleTail, WILEye) has different communication protocols and capabilities.

**Bottlenose UART Parameters:**
- **Baud Rate**: 3 Mbps - Optimized for WiFi/Bt command and data transfer
- **Flow Control**: CTS and RTS enabled (Hardware flow control)
- **Data Bits**: 8
- **Stop Bits**: 1
- **Parity**: None

Hardware flow control ensures reliable communication for network data, terminal bridging, and configuration commands between FREE-WILi and Bottlenose.
:::

### Restart FREE-WILi

After changing the UART communication setting:
1. **Power cycle FREE-WILi** to apply the new configuration
2. **Wait for full boot** before proceeding with firmware flashing
3. **Verify Orca detection** in FREE-WILi status messages

---

## Step 2: Flash Bottlenose Firmware

Before you can use Bottlenose with FREE-WILi, you need to flash the proper firmware to the ESP32-C6. The Bottlenose firmware is built into the FREE-WILi firmware and can be flashed directly from FREE-WILi.

### Hardware Preparation

1. **Connect Bottlenose to FREE-WILi**:
   - Ensure Bottlenose is properly connected via the Orca connector
   - Power on your FREE-WILi device

2. **Locate Control Buttons**:
   On the Bottlenose PCB, you'll find two buttons:
   - **"BOOT" button** - Used to enter bootloader mode
   - **"RESET" button** - Used to reset the ESP32-C6

:::tip Button Location
The BOOT and RESET buttons are typically located near the ESP32-C6 chip on the Bottlenose PCB. Look for small tactile buttons labeled "BOOT" and "RST" or "RESET".
:::

3. **Enter Bootloader Mode**:
   The ESP32-C6 must be in bootloader mode to receive firmware from FREE-WILi:
   
   **Step-by-step process:**
   1. **Hold down** the **"BOOT"** button and keep it pressed
   2. While holding BOOT, **press and release** the **"RESET"** button (quick tap)
   3. **Release** the **"BOOT"** button
   
   ✅ The ESP32-C6 is now in bootloader mode and ready to receive firmware

:::warning Important Timing
Make sure to hold the BOOT button BEFORE pressing RESET, and only release BOOT after you've released RESET. This timing is critical for entering bootloader mode correctly.
:::

### Method A: Flash via USB Console App

1. **Connect to FREE-WILi via USB** and open your serial terminal application

2. **Navigate to ESP32 Flasher Menu**:
   ```
   Main Menu → Extended Menus (e) → Extended Menus (e)
   ```
   - Press `e` to enter Extended Menus
   - Press `e` again to access the ESP32 Flasher menu

3. **Select Bottlenose Firmware**:
   - In the ESP32 Flasher menu, press `n` to select the option for flashing Bottlenose firmware
   - You should see: "Flash Bottlenose WiFi Orca Firmware"

4. **Initiate Flashing**:
   - Follow the on-screen prompts
   - The console will show flashing progress
   - Wait for "Flashing Complete" message

**Expected Console Output:**
```
ESP32 Flasher Menu
==================
n) Flash Bottlenose WiFi Orca Firmware
x) Return to Main Menu

Selection: n

[FLASHER] Detecting ESP32-C6 in bootloader mode...
[FLASHER] ESP32-C6 detected successfully
[FLASHER] Starting firmware flash...
[FLASHER] Writing bootloader... [████████████████] 100%
[FLASHER] Writing application... [████████████████] 100%
[FLASHER] Writing partitions... [████████████████] 100%
[FLASHER] Flashing completed successfully!
[FLASHER] Resetting ESP32-C6...
```

### Method B: Flash via FREE-WILi UI

1. **Open FREE-WILi Web Interface**:
   - Connect to FREE-WILi via network or USB
   - Open the FREE-WILi web interface in your browser

2. **Navigate to Wireless Menu**:
   - Click on the **"Wireless"** menu in the main navigation
   - This will open the wireless configuration pages

3. **Find ESP32 Flasher Page**:
   - **Cycle through the pages** in the wireless menu (use Next/Previous buttons)
   - Look for the page titled **"ESP32 Default App Flasher"**
   - This page contains the firmware flashing controls

4. **Flash Firmware**:
   - On the ESP32 Default App Flasher page, you'll see options for different modules
   - Find the **"Bottlenose WiFi Orca"** section
   - Click the **green "Flash Firmware"** button to initiate flashing

5. **Monitor Progress**:
   - The interface will show a progress bar during flashing
   - Wait for the "Flashing Complete" confirmation message
   - The ESP32-C6 will automatically reset after successful flashing

### Verify Successful Flashing

After flashing completes:

1. **Check Status Indicators**:
   - Look for LED indicators on Bottlenose (if present)
   - Status LEDs should show normal operation patterns

2. **Verify Communication**:
   - The FREE-WILi interface should detect the Bottlenose module
   - Check the Orcas menu for Bottlenose options

3. **Test Basic Functionality**:
   - Try connecting to WiFi through Bottlenose
   - Verify Bt functionality if needed

### Troubleshooting Firmware Flashing

#### Common Issues:

**Problem**: "ESP32-C6 not detected in bootloader mode"
- **Solution**: Repeat the bootloader entry process
- **Check**: Ensure BOOT button timing is correct (hold BOOT, tap RESET, release BOOT)
- **Verify**: Bottlenose is properly connected to FREE-WILi with power

**Problem**: "Flashing failed" or "Connection timeout"
- **Solution**: 
  1. Reset both FREE-WILi and Bottlenose
  2. Retry entering bootloader mode
  3. Attempt flashing again
- **Check**: USB connection is stable (for console method)

**Problem**: "No firmware available" message
- **Solution**: Ensure FREE-WILi firmware is up to date
- **Check**: FREE-WILi firmware includes latest Bottlenose firmware
- **Action**: Update FREE-WILi firmware if necessary

**Problem**: Flashing appears successful but module doesn't work
- **Solution**: 
  1. Perform a hard reset: hold RESET button for 5 seconds
  2. Check hardware connections
  3. Try flashing again
- **Check**: Power supply is stable during operation

:::note Firmware Updates
The Bottlenose firmware embedded in FREE-WILi may be updated with new FREE-WILi firmware releases. Check for FREE-WILi updates periodically to get the latest Bottlenose features and improvements.
:::

### Understanding the Default Bottlenose Application

Once firmware is flashed successfully, Bottlenose runs a default application that provides several key networking and communication features:

#### Core Functionality
The default Bottlenose app is designed to extend FREE-WILi's connectivity options:

- **🌐 WebSocket Terminal Bridge** - Bridges FREE-WILi's main terminal over WebSocket connections
- **📱 Bt Terminal Bridge** - Provides terminal access via Bt Low Energy
- **📡 WiFi Network Scanner** - Scans for available WiFi access points
- **🔍 Bt Device Scanner** - Discovers nearby Bt devices
- **💻 HTTP Web Browser Interface** - Hosts a web server for browser-based terminal access

#### Default App Benefits
- **Remote Access**: Control FREE-WILi wirelessly through WiFi or Bt
- **Web Integration**: Access FREE-WILi terminal from any web browser
- **Network Discovery**: Find and connect to available networks
- **Cross-Platform**: Works with phones, tablets, laptops, and other devices
- **No Additional Software**: Built-in web server requires no special apps

#### Typical Usage Scenarios
- **Wireless Debugging**: Access FREE-WILi terminal without USB cable
- **Remote Configuration**: Configure settings from across the room
- **Multiple Users**: Share access through web interface
- **Mobile Integration**: Control FREE-WILi from smartphone or tablet
- **Network Troubleshooting**: Scan and analyze WiFi/Bt environments

---

## Step 3: Configure Bottlenose Settings

Before using Bottlenose functionality, you need to configure the networking and communication settings through FREE-WILi's configuration system.

### Accessing Configuration Settings

1. **Connect to FREE-WILi** via USB console or web interface
2. **Navigate to Settings** menu
3. **Find Bottlenose configuration sections**: WiFi, Bt, and WebSocket Server

### WiFi Configuration

Configure Bottlenose WiFi functionality through the WiFi settings menu:

```
========  Configure Wifi  ========

s) Enable Wifi Station Mode [off]
d) SSID for Wifi Station Mode []
p) Password for Wifi Station Mode []
a) Enable Access Point Mode [off]
u) Access Point Authentication [open]
h) Access Point hide SSID [visible]
g) SSID for Access Point []
x) Password for Access Point []
```

#### WiFi Settings Explained:

**Station Mode Settings:**
- `s)` **Enable Wifi Station Mode** - Connect Bottlenose to existing WiFi network
- `d)` **SSID for Station Mode** - Network name to connect to
- `p)` **Password for Station Mode** - Network password (leave blank for open networks)

**Access Point Mode Settings:**
- `a)` **Enable Access Point Mode** - Create WiFi hotspot using Bottlenose
- `u)` **Access Point Authentication** - Security type (open/WPA2/WPA3)
- `h)` **Access Point Hide SSID** - Make hotspot visible or hidden
- `g)` **SSID for Access Point** - Hotspot name (e.g., "Bottlenose_AP")
- `x)` **Password for Access Point** - Hotspot password (8+ characters for secured networks)

#### WiFi Configuration Example:
```
Configure WiFi for home network connection:
s) Enable Wifi Station Mode [on]
d) SSID for Wifi Station Mode [MyHomeWiFi]
p) Password for Wifi Station Mode [mypassword123]
a) Enable Access Point Mode [off]

Or configure as mobile hotspot:
s) Enable Wifi Station Mode [off]
a) Enable Access Point Mode [on]
u) Access Point Authentication [WPA2]
h) Access Point hide SSID [visible]
g) SSID for Access Point [Bottlenose_Mobile]
x) Password for Access Point [mobile123secure]
```

### Bt Configuration

Configure Bottlenose Bt functionality:

```
========  Configure BT  ========

s) Enable BT [off]
t) BT Terminal Bridge [off]
a) BT Advertising Name []
```

#### Bt Settings Explained:

- `s)` **Enable BT** - Turn on Bt Low Energy functionality
- `t)` **BT Terminal Bridge** - Enable terminal access via Bt connections
- `a)` **BT Advertising Name** - Device name visible to other Bt devices

#### Bt Configuration Example:
```
Enable Bt with terminal access:
s) Enable BT [on]
t) BT Terminal Bridge [on]
a) BT Advertising Name [Bottlenose_Terminal_01]
```

:::tip Bt Device Names
Choose descriptive names for easy identification when multiple Bottlenose devices are nearby. Include location or purpose in the name (e.g., "Lab_Bottlenose", "Mobile_Unit_A").
:::

### WebSocket Server Configuration

Configure the web-based terminal access:

```
========  Websocket Server Configuration ========

r) Start Websocket Server [on]
p) Websocket Server Port [8765]
m) Authentication Mode [open]
u) Authentication Username []
d) Authentication Password []
```

#### WebSocket Settings Explained:

- `r)` **Start Websocket Server** - Enable web-based terminal access
- `p)` **Websocket Server Port** - TCP port for web connections (default: 8765)
- `m)` **Authentication Mode** - Security level (open/password-protected)
- `u)` **Authentication Username** - Login username (if authentication enabled)
- `d)` **Authentication Password** - Login password (if authentication enabled)

#### WebSocket Configuration Examples:

**Open Access (No Authentication):**
```
r) Start Websocket Server [on]
p) Websocket Server Port [8765]
m) Authentication Mode [open]
```

**Secure Access (Password Protected):**
```
r) Start Websocket Server [on]
p) Websocket Server Port [8765]
m) Authentication Mode [password]
u) Authentication Username [admin]
d) Authentication Password [secure123]
```

### Configuration Workflow

#### Basic Setup (WiFi + Web Access):
1. **Configure WiFi Station Mode**:
   - Enable WiFi Station Mode
   - Set your network SSID and password
   - Save settings

2. **Enable WebSocket Server**:
   - Start WebSocket Server
   - Use default port 8765 or customize
   - Configure authentication if needed

3. **Test Connection**:
   - Restart Bottlenose to apply settings
   - Connect to your WiFi network
   - Access web interface via browser

#### Advanced Setup (Full Functionality):
1. **Configure All Services**:
   - Set up WiFi (Station and/or AP mode)
   - Enable Bt with custom device name
   - Configure WebSocket server with authentication

2. **Security Considerations**:
   - Use strong passwords for AP mode
   - Enable WebSocket authentication for public networks
   - Choose unique Bt advertising names

3. **Test All Interfaces**:
   - Verify WiFi connection and web access
   - Test Bt terminal connectivity
   - Confirm WebSocket server accessibility

### Applying Configuration Changes

After configuring settings:

1. **Save Configuration**:
   - Exit settings menus to save changes
   - Configuration is stored in FREE-WILi's non-volatile memory

2. **Restart Services**:
   - Restart FREE-WILi or power cycle to apply all settings
   - Bottlenose will automatically start with new configuration

3. **Verify Operation**:
   - Check WiFi connection status
   - Test Bt discoverability
   - Confirm web server accessibility

#### Access Your Configured Bottlenose:

**Via Web Browser:**
- Connect to same WiFi network as Bottlenose
- Navigate to: `http://<bottlenose-ip>:8765`
- Use authentication credentials if configured

**Via Bt:**
- Scan for Bt devices
- Connect to your configured device name
- Access terminal through BLE app

**Via WiFi Hotspot:**
- Connect device to Bottlenose AP
- Navigate to: `http://192.168.4.1:8765`
- Access terminal interface

---

## Step 4: Set Up Your Project

### Create New Project

```bash
# Clone the ESP-IDF example template
git clone https://github.com/espressif/esp-idf.git
cd esp-idf/examples/get-started/hello_world
cp -r hello_world ../../../bottlenose_first_project
cd ../../../bottlenose_first_project
```

### Project Configuration

```bash
# Configure for ESP32-C6
idf.py set-target esp32c6

# Open menuconfig for additional settings
idf.py menuconfig
```

In menuconfig:
1. Navigate to `Example Connection Configuration`
2. Set your WiFi SSID and password
3. Navigate to `Component config` → `ESP32C6-Specific`
4. Configure power management settings

## Step 5: Basic WiFi Code

Replace the contents of `main/hello_world_main.c`:

```c
#include <stdio.h>
#include <string.h>
#include "freertos/FreeRTOS.h"
#include "freertos/task.h"
#include "freertos/event_groups.h"
#include "esp_system.h"
#include "esp_wifi.h"
#include "esp_event.h"
#include "esp_log.h"
#include "nvs_flash.h"
#include "driver/gpio.h"

// WiFi credentials
#define WIFI_SSID "YourWiFiNetwork"
#define WIFI_PASS "YourPassword"

// GPIO pins
#define LED_WIFI_PIN    2
#define LED_STATUS_PIN  8

static const char *TAG = "BottlenoseDemo";
static EventGroupHandle_t s_wifi_event_group;
static const int WIFI_CONNECTED_BIT = BIT0;

static void wifi_event_handler(void* arg, esp_event_base_t event_base,
                               int32_t event_id, void* event_data) {
    if (event_base == WIFI_EVENT && event_id == WIFI_EVENT_STA_START) {
        esp_wifi_connect();
    } else if (event_base == WIFI_EVENT && event_id == WIFI_EVENT_STA_DISCONNECTED) {
        esp_wifi_connect();
        ESP_LOGI(TAG, "Retrying WiFi connection...");
        gpio_set_level(LED_WIFI_PIN, 0); // Turn off WiFi LED
    } else if (event_base == IP_EVENT && event_id == IP_EVENT_STA_GOT_IP) {
        ip_event_got_ip_t* event = (ip_event_got_ip_t*) event_data;
        ESP_LOGI(TAG, "Got IP:" IPSTR, IP2STR(&event->ip_info.ip));
        xEventGroupSetBits(s_wifi_event_group, WIFI_CONNECTED_BIT);
        gpio_set_level(LED_WIFI_PIN, 1); // Turn on WiFi LED
    }
}

void wifi_init_sta(void) {
    s_wifi_event_group = xEventGroupCreate();

    ESP_ERROR_CHECK(esp_netif_init());
    ESP_ERROR_CHECK(esp_event_loop_create_default());
    esp_netif_create_default_wifi_sta();

    wifi_init_config_t cfg = WIFI_INIT_CONFIG_DEFAULT();
    ESP_ERROR_CHECK(esp_wifi_init(&cfg));

    esp_event_handler_instance_t instance_any_id;
    esp_event_handler_instance_t instance_got_ip;
    ESP_ERROR_CHECK(esp_event_handler_instance_register(WIFI_EVENT,
                                                        ESP_EVENT_ANY_ID,
                                                        &wifi_event_handler,
                                                        NULL,
                                                        &instance_any_id));
    ESP_ERROR_CHECK(esp_event_handler_instance_register(IP_EVENT,
                                                        IP_EVENT_STA_GOT_IP,
                                                        &wifi_event_handler,
                                                        NULL,
                                                        &instance_got_ip));

    wifi_config_t wifi_config = {
        .sta = {
            .ssid = WIFI_SSID,
            .password = WIFI_PASS,
        },
    };
    ESP_ERROR_CHECK(esp_wifi_set_mode(WIFI_MODE_STA) );
    ESP_ERROR_CHECK(esp_wifi_set_config(WIFI_IF_STA, &wifi_config) );
    ESP_ERROR_CHECK(esp_wifi_start() );

    ESP_LOGI(TAG, "WiFi initialization finished.");
}

void init_gpio(void) {
    gpio_config_t io_conf = {
        .pin_bit_mask = (1ULL << LED_WIFI_PIN) | (1ULL << LED_STATUS_PIN),
        .mode = GPIO_MODE_OUTPUT,
        .pull_up_en = GPIO_PULLUP_DISABLE,
        .pull_down_en = GPIO_PULLDOWN_DISABLE,
        .intr_type = GPIO_INTR_DISABLE
    };
    gpio_config(&io_conf);
}

void status_task(void *pvParameters) {
    int counter = 0;
    
    while (1) {
        // Blink status LED
        gpio_set_level(LED_STATUS_PIN, counter % 2);
        
        // Print status every 10 seconds
        if (counter % 10 == 0) {
            ESP_LOGI(TAG, "System running for %d seconds", counter);
            ESP_LOGI(TAG, "Free heap: %d bytes", esp_get_free_heap_size());
            
            // Check WiFi status
            wifi_ap_record_t ap_info;
            if (esp_wifi_sta_get_ap_info(&ap_info) == ESP_OK) {
                ESP_LOGI(TAG, "Connected to: %s, RSSI: %d", ap_info.ssid, ap_info.rssi);
            }
        }
        
        counter++;
        vTaskDelay(pdMS_TO_TICKS(1000));
    }
}

void app_main(void) {
    ESP_LOGI(TAG, "Bottlenose WiFi Orca - Getting Started Example");
    ESP_LOGI(TAG, "===============================================");

    // Initialize NVS
    esp_err_t ret = nvs_flash_init();
    if (ret == ESP_ERR_NVS_NO_FREE_PAGES || ret == ESP_ERR_NVS_NEW_VERSION_FOUND) {
        ESP_ERROR_CHECK(nvs_flash_erase());
        ret = nvs_flash_init();
    }
    ESP_ERROR_CHECK(ret);

    // Initialize GPIO
    init_gpio();

    // Initialize WiFi
    ESP_LOGI(TAG, "Initializing WiFi...");
    wifi_init_sta();

    // Wait for connection
    EventBits_t bits = xEventGroupWaitBits(s_wifi_event_group,
                                           WIFI_CONNECTED_BIT,
                                           pdFALSE,
                                           pdFALSE,
                                           portMAX_DELAY);

    if (bits & WIFI_CONNECTED_BIT) {
        ESP_LOGI(TAG, "Connected to WiFi successfully!");
    } else {
        ESP_LOGE(TAG, "Failed to connect to WiFi");
        return;
    }

    // Start status task
    xTaskCreate(status_task, "status_task", 4096, NULL, 5, NULL);

    ESP_LOGI(TAG, "System initialized. Check the LEDs and monitor output!");
}
```

## Step 6: Update CMakeLists.txt

Update `main/CMakeLists.txt` to include required components:

```cmake
idf_component_register(SRCS "hello_world_main.c"
                       INCLUDE_DIRS "."
                       REQUIRES wifi nvs_flash)
```

## Step 7: Configure WiFi Credentials

Edit the WiFi credentials in the code:
```c
#define WIFI_SSID "YourWiFiNetwork"    // Replace with your network name
#define WIFI_PASS "YourPassword"       // Replace with your password
```

## Step 8: Build and Flash

### Build the project

```bash
idf.py build
```

### Flash to Bottlenose

```bash
idf.py -p COM3 flash  # Replace COM3 with your port
```

### Monitor output

```bash
idf.py -p COM3 monitor
```

You should see output like:
```
I (324) BottlenoseDemo: Bottlenose WiFi Orca - Getting Started Example
I (324) BottlenoseDemo: ===============================================
I (334) BottlenoseDemo: Initializing WiFi...
I (344) BottlenoseDemo: WiFi initialization finished.
I (2344) BottlenoseDemo: Connected to WiFi successfully!
I (3344) BottlenoseDemo: System running for 0 seconds
I (3344) BottlenoseDemo: Free heap: 290876 bytes
I (3344) BottlenoseDemo: Connected to: YourWiFiNetwork, RSSI: -45
```

## Step 9: Add HTTP Client (Optional)

To make your Bottlenose send data over WiFi, add this HTTP client code:

```c
#include "esp_http_client.h"

esp_err_t http_event_handler(esp_http_client_event_t *evt) {
    switch(evt->event_id) {
        case HTTP_EVENT_ERROR:
            ESP_LOGD(TAG, "HTTP_EVENT_ERROR");
            break;
        case HTTP_EVENT_ON_CONNECTED:
            ESP_LOGD(TAG, "HTTP_EVENT_ON_CONNECTED");
            break;
        case HTTP_EVENT_HEADERS_SENT:
            ESP_LOGD(TAG, "HTTP_EVENT_HEADERS_SENT");
            break;
        case HTTP_EVENT_ON_FINISH:
            ESP_LOGD(TAG, "HTTP_EVENT_ON_FINISH");
            break;
        default:
            break;
    }
    return ESP_OK;
}

void send_http_request(void) {
    esp_http_client_config_t config = {
        .url = "http://httpbin.org/post",
        .event_handler = http_event_handler,
    };
    
    esp_http_client_handle_t client = esp_http_client_init(&config);
    
    // Set POST data
    const char *post_data = "{\"device\":\"Bottlenose\",\"status\":\"online\"}";
    esp_http_client_set_method(client, HTTP_METHOD_POST);
    esp_http_client_set_header(client, "Content-Type", "application/json");
    esp_http_client_set_post_field(client, post_data, strlen(post_data));
    
    // Perform request
    esp_err_t err = esp_http_client_perform(client);
    if (err == ESP_OK) {
        ESP_LOGI(TAG, "HTTP POST Status = %d", esp_http_client_get_status_code(client));
    } else {
        ESP_LOGE(TAG, "HTTP POST request failed: %s", esp_err_to_name(err));
    }
    
    esp_http_client_cleanup(client);
}
```

## Step 10: Test Your Setup

### Expected Results

1. **Serial Monitor**: Continuous status updates and WiFi connection info
2. **LEDs**: 
   - Status LED should blink every second
   - WiFi LED should be solid when connected
3. **Network**: Device should appear in your router's connected devices list

### Verify Connection

1. Check your router's admin page for the connected device
2. Try pinging the IP address shown in the monitor
3. Monitor signal strength (RSSI) values

## Troubleshooting

### WiFi Issues

**Problem**: "Failed to connect to WiFi"
- **Solution**: Double-check SSID and password
- **Check**: Verify 2.4GHz network (ESP32-C6 doesn't support 5GHz)

**Problem**: Frequent disconnections
- **Solution**: Move closer to router or check signal strength
- **Check**: Router compatibility with ESP32 devices

### Power Issues

**Problem**: Device resets randomly
- **Solution**: Check power supply stability
- **Check**: USB cable quality and connection

### Programming Issues

**Problem**: Flash/upload failures
- **Solution**: Try different baud rates or ports
- **Check**: USB drivers installation

## Next Steps

Congratulations! You now have a working Bottlenose WiFi system. Here are some ideas for expanding your project:

### Immediate Improvements
1. **Add web server** to control the device remotely
2. **Implement MQTT client** for IoT communication
3. **Add sensor reading** and data transmission
4. **Create mobile app interface**

### Advanced Features
1. **OTA updates** for wireless firmware updates
2. **WiFi mesh networking** with multiple devices
3. **Bt configuration** for easy setup
4. **Integration with FREE-WILi commands**

### Learning Resources
- [Bottlenose Interfacing Guide](bottlenose-interfacing) - Deep dive into programming
- [Hardware Hookup Guide](bottlenose-hardware-hookup) - Physical connections
- [Bottlenose Troubleshooting](bottlenose-troubleshooting) - Common problems and solutions
- [Main Bottlenose Documentation](bottlenose-wifi-orca) - Complete feature overview

## Code Repository

The complete example code is available at:
```
https://github.com/freewili/bottlenose-examples/getting-started
```

## Community and Support

- **Forum**: Join the FREE-WILi community forum for questions and project sharing
- **GitHub**: Submit issues and feature requests
- **Documentation**: Check the main documentation for advanced topics

Happy networking with your Bottlenose WiFi Orca!

---

## Going Further: Custom ESP32-C6 Programming

For advanced users who want to develop custom applications on the ESP32-C6, you can program the Bottlenose directly using standard ESP32 development tools.

### Development Setup Requirements

Before you begin custom programming, you'll need:
- **ESP-IDF or Arduino IDE** installed on your computer
- **USB-C cable** for JTAG debugging and programming
- **Bottlenose connected to FREE-WILi** for power (USB port is data-only!)
- **ESPTool** for firmware flashing

:::warning Power Requirements
⚠️ **CRITICAL**: The USB-C port on Bottlenose is **DATA ONLY** - it does NOT provide power to the ESP32-C6. You **MUST** connect Bottlenose to FREE-WILi via the Orca connector to power the device, even when programming via USB.
:::

### Step 1: Install Development Environment

Choose your preferred development environment:

#### Option A: ESP-IDF (Recommended for Advanced Features)
```bash
# Install ESP-IDF
git clone -b release/v5.1 --recursive https://github.com/espressif/esp-idf.git
cd esp-idf
./install.sh esp32c6

# Set up environment
. ./export.sh
```

#### Option B: Arduino IDE (Easier for Beginners)
1. Install Arduino IDE
2. Add ESP32 board package: `https://espressif.github.io/arduino-esp32/package_esp32_index.json`
3. Select **"ESP32C6 Dev Module"** as target board

#### Option C: PlatformIO (Professional IDE)
```bash
# Install PlatformIO extension in VS Code
# Create new project with board: esp32-c6-devkitc-1
```

### Step 2: Hardware Connection for Programming

1. **Power Setup**:
   - Connect Bottlenose to FREE-WILi via Orca connector (for power)
   - Keep FREE-WILi powered on during programming

2. **Programming Connection**:
   - Connect USB-C cable from computer to Bottlenose USB port
   - This provides JTAG debugging and programming interface

3. **Verify Connection**:
   ```bash
   # Check if ESP32-C6 is detected
   esptool.py --list-ports
   # Should show your COM port
   ```

### Step 3: Basic Custom Application

Here's a simple example to get you started with custom Bottlenose programming:

#### ESP-IDF Example - WiFi Status LED
```c
#include "freertos/FreeRTOS.h"
#include "freertos/task.h"
#include "esp_wifi.h"
#include "esp_event.h"
#include "nvs_flash.h"
#include "driver/gpio.h"
#include "esp_log.h"

#define WIFI_SSID "YourNetwork"
#define WIFI_PASS "YourPassword"
#define LED_PIN GPIO_NUM_2

static const char *TAG = "BottlenoseCustom";

static void wifi_event_handler(void* arg, esp_event_base_t event_base,
                               int32_t event_id, void* event_data) {
    if (event_base == WIFI_EVENT && event_id == WIFI_EVENT_STA_START) {
        esp_wifi_connect();
    } else if (event_base == WIFI_EVENT && event_id == WIFI_EVENT_STA_DISCONNECTED) {
        gpio_set_level(LED_PIN, 0); // Turn off LED
        esp_wifi_connect();
        ESP_LOGI(TAG, "Retrying WiFi connection...");
    } else if (event_base == IP_EVENT && event_id == IP_EVENT_STA_GOT_IP) {
        gpio_set_level(LED_PIN, 1); // Turn on LED
        ip_event_got_ip_t* event = (ip_event_got_ip_t*) event_data;
        ESP_LOGI(TAG, "Got IP:" IPSTR, IP2STR(&event->ip_info.ip));
    }
}

void app_main(void) {
    ESP_LOGI(TAG, "Starting Bottlenose Custom Application");
    
    // Initialize LED
    gpio_config_t led_config = {
        .pin_bit_mask = (1ULL << LED_PIN),
        .mode = GPIO_MODE_OUTPUT,
        .pull_up_en = GPIO_PULLUP_DISABLE,
        .pull_down_en = GPIO_PULLDOWN_DISABLE,
        .intr_type = GPIO_INTR_DISABLE
    };
    gpio_config(&led_config);
    
    // Initialize NVS
    esp_err_t ret = nvs_flash_init();
    if (ret == ESP_ERR_NVS_NO_FREE_PAGES || ret == ESP_ERR_NVS_NEW_VERSION_FOUND) {
        ESP_ERROR_CHECK(nvs_flash_erase());
        ret = nvs_flash_init();
    }
    ESP_ERROR_CHECK(ret);
    
    // Initialize WiFi
    ESP_ERROR_CHECK(esp_netif_init());
    ESP_ERROR_CHECK(esp_event_loop_create_default());
    esp_netif_create_default_wifi_sta();
    
    wifi_init_config_t cfg = WIFI_INIT_CONFIG_DEFAULT();
    ESP_ERROR_CHECK(esp_wifi_init(&cfg));
    
    esp_event_handler_instance_register(WIFI_EVENT, ESP_EVENT_ANY_ID, 
                                       &wifi_event_handler, NULL, NULL);
    esp_event_handler_instance_register(IP_EVENT, IP_EVENT_STA_GOT_IP, 
                                       &wifi_event_handler, NULL, NULL);
    
    wifi_config_t wifi_config = {
        .sta = {
            .ssid = WIFI_SSID,
            .password = WIFI_PASS,
        },
    };
    
    ESP_ERROR_CHECK(esp_wifi_set_mode(WIFI_MODE_STA));
    ESP_ERROR_CHECK(esp_wifi_set_config(WIFI_IF_STA, &wifi_config));
    ESP_ERROR_CHECK(esp_wifi_start());
    
    // Main application loop
    while (1) {
        ESP_LOGI(TAG, "Custom application running...");
        vTaskDelay(pdMS_TO_TICKS(10000));
    }
}
```

#### Arduino Example - Bt Beacon
```cpp
#include "WiFi.h"
#include "BtSerial.h"

BtSerial SerialBT;
const int ledPin = 2;

void setup() {
    Serial.begin(115200);
    pinMode(ledPin, OUTPUT);
    
    // Initialize Bt
    SerialBT.begin("Bottlenose-Custom"); 
    Serial.println("Bottlenose custom firmware started!");
    Serial.println("Bt discoverable as: Bottlenose-Custom");
    
    // Startup LED sequence
    for(int i = 0; i < 5; i++) {
        digitalWrite(ledPin, HIGH);
        delay(200);
        digitalWrite(ledPin, LOW);
        delay(200);
    }
}

void loop() {
    // Handle Bt communication
    if (SerialBT.available()) {
        String command = SerialBT.readString();
        command.trim();
        
        if (command == "LED_ON") {
            digitalWrite(ledPin, HIGH);
            SerialBT.println("LED turned ON");
        } else if (command == "LED_OFF") {
            digitalWrite(ledPin, LOW);
            SerialBT.println("LED turned OFF");
        } else if (command == "STATUS") {
            SerialBT.printf("Free heap: %d bytes\n", ESP.getFreeHeap());
            SerialBT.printf("WiFi MAC: %s\n", WiFi.macAddress().c_str());
        }
    }
    
    // Periodic status blink
    digitalWrite(ledPin, HIGH);
    delay(100);
    digitalWrite(ledPin, LOW);
    delay(2900);
}
```

### Step 4: Build and Flash Custom Firmware

#### ESP-IDF Method:
```bash
# Create project directory
mkdir bottlenose-custom && cd bottlenose-custom
idf.py create-project bottlenose-app

# Set target to ESP32-C6
idf.py set-target esp32c6

# Build the project
idf.py build

# Flash to Bottlenose (make sure it's powered via FREE-WILi!)
idf.py -p COM12 flash

# Monitor serial output
idf.py -p COM12 monitor
```

#### Arduino Method:
1. **Select Board**: Tools → Board → ESP32 Arduino → ESP32C6 Dev Module
2. **Select Port**: Tools → Port → (your COM port)
3. **Configure Settings**:
   - Flash Mode: QIO
   - Flash Size: 4MB
   - Flash Frequency: 80MHz
4. **Upload**: Click Upload button

### Step 5: Advanced Features

#### Communicate with FREE-WILi
```c
// UART communication with FREE-WILi
#include "driver/uart.h"

#define UART_FREEWILI UART_NUM_1
#define BUF_SIZE 1024

void init_freewili_uart(void) {
    uart_config_t uart_config = {
        .baud_rate = 115200,
        .data_bits = UART_DATA_8_BITS,
        .parity = UART_PARITY_DISABLE,
        .stop_bits = UART_STOP_BITS_1,
        .flow_ctrl = UART_HW_FLOWCTRL_DISABLE,
    };
    
    uart_param_config(UART_FREEWILI, &uart_config);
    uart_set_pin(UART_FREEWILI, 4, 5, UART_PIN_NO_CHANGE, UART_PIN_NO_CHANGE);
    uart_driver_install(UART_FREEWILI, BUF_SIZE * 2, 0, 0, NULL, 0);
}

void send_to_freewili(const char* data) {
    uart_write_bytes(UART_FREEWILI, data, strlen(data));
}
```

### Programming Tips and Best Practices

#### Power Management
```c
// Configure power saving for battery applications
#include "esp_pm.h"

esp_pm_config_esp32c6_t pm_config = {
    .max_freq_mhz = 160,
    .min_freq_mhz = 10,
    .light_sleep_enable = true
};
esp_pm_configure(&pm_config);
```

#### Memory Optimization
```c
// Monitor memory usage
void check_memory(void) {
    printf("Free heap: %d bytes\n", esp_get_free_heap_size());
    printf("Minimum free heap: %d bytes\n", esp_get_minimum_free_heap_size());
}
```

#### Debugging with JTAG
```bash
# Use OpenOCD for debugging
openocd -f board/esp32c6-builtin.cfg

# In another terminal, connect GDB
xtensa-esp32c6-elf-gdb build/your-app.elf
(gdb) target remote :3333
(gdb) monitor reset halt
(gdb) continue
```

### Troubleshooting Custom Programming

#### Common Issues:

**Problem**: "Device not found" during flashing
- **Solution**: Ensure Bottlenose is powered via FREE-WILi
- **Check**: USB cable is data-capable (not just charging cable)

**Problem**: "Boot mode not detected"
- **Solution**: Hold BOOT button on ESP32-C6 while connecting USB
- **Alternative**: Use `esptool.py --before default_reset` option

**Problem**: High power consumption
- **Solution**: Enable power management and use sleep modes
- **Check**: Disable unused peripherals in your code

**Problem**: Communication with FREE-WILi fails
- **Solution**: Verify UART pin configuration matches hardware
- **Check**: Baud rate and protocol settings

### Development Resources

- **ESP32-C6 Documentation**: [Espressif ESP32-C6 Docs](https://docs.espressif.com/projects/esp-idf/en/latest/esp32c6/)
- **Arduino ESP32**: [Arduino ESP32 Reference](https://docs.espressif.com/projects/arduino-esp32/en/latest/)
- **PlatformIO**: [PlatformIO ESP32 Platform](https://docs.platformio.org/en/latest/platforms/espressif32.html)
- **Example Code**: Check the FREE-WILi GitHub repository for advanced examples

**Happy coding!** Your Bottlenose WiFi Orca is now ready for custom development while maintaining integration with the FREE-WILi ecosystem! 🚀