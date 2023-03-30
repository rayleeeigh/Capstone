import { userType } from '../constants/userType';

const routes = [
    {
        role: userType.admin,
        access: ['/admin/Announcements','/About','/admin/Home','/admin/Accounts','/admin/Dashboard/Subjects','/admin/Dashboard','/admin/Dashboard/Students','/admin/Dashboard/Teachers']
    },
    {
        role: userType.teacher,
        access: ['/Announcements','/About','/Students','/Grades','/Schedule','/Subjects']
    },
    {
        role: userType.student,
        access: ['/Announcements','/About','/Grades','/Schedule','/Subjects']
    }
]


export function hasAccess(path, role){
    let authorized = false;
    routes.forEach(element => {
        if(element.role === role){
            element.access.forEach(element => {
                if(element === path){
                    authorized = true;
                }
            });
        }
    });

    return {
        hasAccess: authorized,
        path: role === userType.admin? '/admin/Home' : '/Announcements'
    }
}