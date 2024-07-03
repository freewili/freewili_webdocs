import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/test',
    component: ComponentCreator('/test', 'e95'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', 'f25'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', '62e'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', 'a22'),
            routes: [
              {
                path: '/extending-with-orcas/',
                component: ComponentCreator('/extending-with-orcas/', 'b3e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/extending-with-orcas/custom-orca',
                component: ComponentCreator('/extending-with-orcas/custom-orca', '855'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/extending-with-orcas/maestro-debug-orca',
                component: ComponentCreator('/extending-with-orcas/maestro-debug-orca', '4f9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/freewili-firmware-update',
                component: ComponentCreator('/freewili-firmware-update', 'e89'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/gpio',
                component: ComponentCreator('/gpio', 'e3d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/gui-screen-buttons-and-lights/',
                component: ComponentCreator('/gui-screen-buttons-and-lights/', '824'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/gui-screen-buttons-and-lights/color-display-widgets',
                component: ComponentCreator('/gui-screen-buttons-and-lights/color-display-widgets', '4fd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/hardware-low-level-details/',
                component: ComponentCreator('/hardware-low-level-details/', 'fe4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/hardware-low-level-details/ice40-fpga/',
                component: ComponentCreator('/hardware-low-level-details/ice40-fpga/', '19c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/hardware-low-level-details/ice40-fpga/fpga-clock',
                component: ComponentCreator('/hardware-low-level-details/ice40-fpga/fpga-clock', 'ef7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/hardware-low-level-details/ice40-fpga/fpga-connections',
                component: ComponentCreator('/hardware-low-level-details/ice40-fpga/fpga-connections', '4c6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/hardware-low-level-details/ice40-fpga/fpga-programming',
                component: ComponentCreator('/hardware-low-level-details/ice40-fpga/fpga-programming', 'f0e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/hardware-low-level-details/ice40-fpga/ice40-fpga-overview',
                component: ComponentCreator('/hardware-low-level-details/ice40-fpga/ice40-fpga-overview', '0f6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/helpful-links/',
                component: ComponentCreator('/helpful-links/', '190'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/helpful-links/learn-uart/',
                component: ComponentCreator('/helpful-links/learn-uart/', '847'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/io-app/',
                component: ComponentCreator('/io-app/', 'a9b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/io-app/file-system-menu',
                component: ComponentCreator('/io-app/file-system-menu', '084'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/io-app/host-usb-serial-api',
                component: ComponentCreator('/io-app/host-usb-serial-api', 'a31'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/io-app/main-menu-commands',
                component: ComponentCreator('/io-app/main-menu-commands', '148'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/io-app/main-menu-header',
                component: ComponentCreator('/io-app/main-menu-header', '2a7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/io-app/scripting-with-wasm',
                component: ComponentCreator('/io-app/scripting-with-wasm', '5ad'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/io-app/settings-menu/',
                component: ComponentCreator('/io-app/settings-menu/', 'b2b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/io-app/settings-menu/fpga-settings',
                component: ComponentCreator('/io-app/settings-menu/fpga-settings', '554'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/io-app/settings-menu/gpio-settings',
                component: ComponentCreator('/io-app/settings-menu/gpio-settings', '573'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/io-app/settings-menu/i2c-settings',
                component: ComponentCreator('/io-app/settings-menu/i2c-settings', '4cd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/io-app/settings-menu/rtc-settings',
                component: ComponentCreator('/io-app/settings-menu/rtc-settings', 'e5f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/io-app/settings-menu/spi-settings',
                component: ComponentCreator('/io-app/settings-menu/spi-settings', '2f5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/io-app/settings-menu/uart-settings',
                component: ComponentCreator('/io-app/settings-menu/uart-settings', '92b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/radios/',
                component: ComponentCreator('/radios/', '06b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/radios/black-radio-cc1101/',
                component: ComponentCreator('/radios/black-radio-cc1101/', 'af0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/radios/black-radio-cc1101/cc1101-radio-settings',
                component: ComponentCreator('/radios/black-radio-cc1101/cc1101-radio-settings', '51c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/the-basics',
                component: ComponentCreator('/the-basics', 'eaf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/',
                component: ComponentCreator('/', '9a3'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
