import {instance, instanceWithCredentials} from '../../common/api/config';
import {PATH} from '../../common/enums/path';

export const personalSettingsAPI = {
    getAllDevices() {
        return instanceWithCredentials.get(`${PATH.PERSONAL_SETTINGS}`);
    }
};
