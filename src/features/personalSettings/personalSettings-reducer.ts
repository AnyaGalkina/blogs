import {personalSettingsAPI} from './personalSettings-api';
import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {setAppStatus} from '../../app/app-reducer';

const initialState = {
    data: {}
}

const slice = createSlice({
        name: 'personalSettings',
        initialState,
        reducers: {
            setAllDevices(state, action) {
                state.data = action.payload;
            },
        }
    }
);

export const personalSettingsReducer = slice.reducer;
export const {setAllDevices} = slice.actions;

export const getAllDevices = createAsyncThunk('personalSettings/setAllDevices', async (_, thunkAPI) => {
    const {dispatch} = thunkAPI;

    dispatch(setAppStatus({appStatus: 'loading'}));
    try {
        const response = await personalSettingsAPI.getAllDevices();
        dispatch(setAllDevices(response.data));
    } catch (e) {

    } finally {
        dispatch(setAppStatus({appStatus: 'idle'}));
    }
});