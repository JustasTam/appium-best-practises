import { config } from './wdio.shared.conf';

// Sauce specific config
config.user = 'kilo.health.automation';
config.key = '7fae8b6b-dfbe-4aa6-b66e-0821c3d02dad';

// Souce Labs region
config.region = 'eu';

// Services
config.services = (config.services || []).concat('sauce');

export default config;
