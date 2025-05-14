import DeviceDetector from "device-detector-js";

const deviceDetector = new DeviceDetector();

export const detector = (req, _, next) => {
    const userAgent = req.headers['user-agent'] || '';
    const device = deviceDetector.parse(userAgent);

    req.deviceInfo = {
        device_type: device?.device?.type,
        os: device?.os,
        client: device?.client,
        raw_user_agent: userAgent
    }

    next();
}
