import { Activity } from "../types";

export type ActivityActions = {


};

type ActivityState = {
  activities: Activity[];
};
export const iniatialState: ActivityState = {
  activities: [],
};

export const activityReducer = (
  state:ActivityState = iniatialState,
  action:ActivityActions
) => {



  
};
