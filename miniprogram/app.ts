import GlobalDataInterface from './movie/interface/GlobalDataInterface';
import UserDataInterface from './movie/interface/UserDataInterface';

App<IAppOption>({
    globalData<GlobalDataInterface>: {
        userData<UserDataInterface>: null
    },

    async onLaunch() {

    }
})
