import React from "react";
import { Table } from "react-bootstrap";
import "../static/css/SchedulePresentation.css"


const SchedulePresentation = ()=> {
    const weeks = [["Sun", "26"],["Mon", "27"],["Tue", "28"],["wed", "29"],["Thu", "30"],["Fri", "31"],["Sat", "01"]];
    const times = ["1 AM", "2 AM", "3 AM", "4 AM", "5 AM", "6 AM", "7 AM","8 AM", "9 AM", "10 AM", "11 AM", "12 AM",];


    return (
        <div className="w-100">
            <Table striped bordered hover size="md">
                <thead>
                    <tr>
                        <th className="sch-pre-thhead">
                            <p className="text-center">{weeks[0][0]}</p>
                            <p className="text-center">{weeks[0][1]}</p>
                        </th>
                        <th className="sch-pre-thhead">
                            <p className="text-center">{weeks[1][0]}</p>
                            <p className="text-center">{weeks[1][1]}</p>
                        </th>
                        <th className="sch-pre-thhead">
                            <p className="text-center">{weeks[2][0]}</p>
                            <p className="text-center">{weeks[2][1]}</p>
                        </th>
                        <th className="sch-pre-thhead">
                            <p className="text-center">{weeks[3][0]}</p>
                            <p className="text-center">{weeks[3][1]}</p>
                        </th>
                        <th className="sch-pre-thhead">
                            <p className="text-center">{weeks[4][0]}</p>
                            <p className="text-center">{weeks[4][1]}</p>
                        </th>
                        <th className="sch-pre-thhead">
                            <p className="text-center">{weeks[5][0]}</p>
                            <p className="text-center">{weeks[5][1]}</p>
                        </th>
                        <th className="sch-pre-thhead">
                            <p className="text-center">{weeks[6][0]}</p>
                            <p className="text-center">{weeks[6][1]}</p>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        times.map((moment, idx) => {
                            return <tr key={idx}>
                                        {
                                            weeks.map((value, index) => {
                                                return <td key={index} className="schdeule-cell">{moment}</td>
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