import React from 'react';
import {useSelector} from 'react-redux';

export default function Faculty({children}: { children: any }) {
    const {currentUser} = useSelector((state: any) => state.accountReducer);
    if (currentUser.role !== 'FACULTY' && currentUser.role !== 'ADMIN') {
        return null;
    }
    return <>{children}</>;
}