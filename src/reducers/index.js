import { combineReducers } from 'redux';
import user from './userReducer';
import {dashboard, dashboard2, dashboard3} from './dashboardReducer';
import contest from './contestReducer';


 const rootReducer = combineReducers({
   user,
   dashboard,
   dashboard2,
   dashboard3,
   contest
 });

 export default rootReducer;
