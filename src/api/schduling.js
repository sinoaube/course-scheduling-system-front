import request from "../utils/request";
import {getURL} from "../utils/request";

export const listSchedulesInSemester = (semester_date) => {
    return request({
        url: '/schedule',
        method: 'get',
        params: {
            semester_date: semester_date
        }
    });
};

export const createNewSchedule = (semester_date) => {
    return request({
        url: '/schedule/new',
        method: 'get',
        params: {
            semester_date: semester_date
        },
        timeout: 60000,
    });
};

export const listSchedulesItems = (schedule_id) => {
    return request({
        url: '/schedule/' + schedule_id + "/items",
        method: 'get',
        params: {}
    });
};

export const listSchedulesItemsGroupView = (schedule_id) => {
    return request({
        url: '/schedule/' + schedule_id + "/items/group_view",
        method: 'get',
        params: {}
    });
};

export const deleteSchedule = (schedule_id) => {
    return request({
        url: '/schedule/' + schedule_id,
        method: 'delete',
        params: {},
    });
};

export const deleteScheduleInSemester = (semester_date) => {
    return request({
        url: '/schedule/',
        method: 'delete',
        params: {
            semester_date: semester_date,
        },
    });
};

export const downloadStudentExcelURL = (schedule_id, college_id) => {
    return getURL('/schedule/' + schedule_id + "/student_excel?college_id=" + college_id);
};

export const downloadTeacherExcelURL = (schedule_id, college_id) => {
    return getURL('/schedule/' + schedule_id + "/teacher_excel?college_id=" + college_id);
};