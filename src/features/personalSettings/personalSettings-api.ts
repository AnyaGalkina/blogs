import {instance} from '../../common/api/config';
import {PATH} from '../../common/enums/path';

export const personalSettingsAPI = {
    getAllDevices() {
        return instance.get(`${PATH.PERSONAL_SETTINGS}`);
    }
};
