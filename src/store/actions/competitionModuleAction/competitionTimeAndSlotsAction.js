import ApiConstants from "../../../themes/apiConstants";


// get competition with time slots
function getCompetitionWithTimeSlots(year, competitionId, alldata) {
    const action = {
        type: ApiConstants.API_GET_COMPETITION_WITH_TIME_SLOTS_LOAD,
        year: year,
        competitionId,
        alldata: alldata
    }
    return action;
}
// add and remove time slot
function addRemoveTimeSlot(index, item, key, parentIndex) {
    const action = {
        type: ApiConstants.Api_ADD_REMOVE_TIME_SLOT_TABLE,
        index,
        item,
        key,
        parentIndex

    }
    return action
}

function UpdateTimeSlotsData(value, key, contentType, index, mainId, id) {
    return {
        type: ApiConstants.UPDATE_POST_DATA_TIME_SLOTS_COMPETITION,
        value,
        key,
        contentType,
        index,
        mainId,
        id,
    };
}

function UpdateTimeSlotsDataManual(value, key, contentType, index, mainId, id, parentIndex) {
    return {
        type: ApiConstants.UPDATE_POST_DATA_TIME_SLOTS_MANUAL_COMPETITION,
        value,
        key,
        contentType,
        index,
        mainId,
        id,
        parentIndex,
    };
}

// post time slot Data
function addTimeSlotDataPost(payload) {
    const action = {
        type: ApiConstants.API_COMPETITION_TIMESLOT_POST_LOAD,
        payload
    }
    return action
}


export {
    getCompetitionWithTimeSlots,
    addRemoveTimeSlot,
    UpdateTimeSlotsData,
    UpdateTimeSlotsDataManual,
    addTimeSlotDataPost,
}
