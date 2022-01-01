import React from "react";
import { Table } from "react-bootstrap";
import "../static/css/SchedulePresentation.css"

const SchedulePresentation = ()=> {
    const weeks = [["Sun", "26"],["Mon", "27"],["Tue", "28"],["wed", "29"],["Thu", "30"],["Fri", "31"],["Sat", "01"]];
    const times = ["1 AM", "2 AM", "3 AM", "4 AM", "5 AM"]
    const TableHead = ()=> {
        return weeks.map((value, index) => {
            return <th className="sch-pre-thhead" key={index}>
                <p className="text-center">{value[0]}</p>
                <p className="text-center">{value[1]}</p>
            </th>
        })
    }

    return (
        <div className="w-100">
            <Table striped bordered hover size="md">
                <thead>
                    <tr>
                        {<TableHead />}
                    </tr>
                </thead>
                <tbody>
                    {
                        times.map((moment, idx) => {
                            return <tr key={idx}>
                                        {
                                            weeks.map((value, index) => {
                                                return <td key={index}></td>
                                            })
                                        }
                                    </tr>
                        })
                    }
                    
                </tbody>
            </Table>
        </div>
    )
}

export default SchedulePresentation;