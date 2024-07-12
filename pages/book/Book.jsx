import "./Book.css"
import Calendar from "react-calendar"
import { Navigate } from 'react-router-dom';
import { useState } from "react";
export default function Book(){
    const [actv,setActv]=useState(0)
    const [done,setDone]=useState(0)
    return (
      <div className="book-cons">
        {done && <Navigate to="/done" replace={true} />}
        <div className="book-cons-tit">Choose Farm Visit Appointment</div>
        <div className="book-cons-cont">
          <div className="book-cons-left">
            <div className="book-lf-tit">Select Date</div>
            <Calendar />
          </div>
          <div className="book-cons-left">
            <div className="book-lf-tit">Select Time</div>
            <div className="book-time">
              <div className="time-row">
                <div
                  className={'time-item' + (actv == 0 ? ' actv' : '')}
                  onClick={() => {
                    setActv(0);
                  }}
                >
                  09:00 AM
                </div>
                <div
                  className={'time-item' + (actv == 1 ? ' actv' : '')}
                  onClick={() => {
                    setActv(1);
                  }}
                >
                  09:30 AM
                </div>
                <div
                  className={'time-item' + (actv == 2 ? ' actv' : '')}
                  onClick={() => {
                    setActv(2);
                  }}
                >
                  10:00 AM
                </div>
              </div>
              <div className="time-row">
                <div
                  className={'time-item' + (actv == 3 ? ' actv' : '')}
                  onClick={() => {
                    setActv(3);
                  }}
                >
                  10:30 AM
                </div>
                <div
                  className={'time-item' + (actv == 4 ? ' actv' : '')}
                  onClick={() => {
                    setActv(4);
                  }}
                >
                  11:00 AM
                </div>
                <div
                  className={'time-item' + (actv == 5 ? ' actv' : '')}
                  onClick={() => {
                    setActv(5);
                  }}
                >
                  11:30 AM
                </div>
              </div>
              <div className="time-row">
                <div
                  className={'time-item' + (actv == 6 ? ' actv' : '')}
                  onClick={() => {
                    setActv(6);
                  }}
                >
                  12:00 PM
                </div>
                <div
                  className={'time-item' + (actv == 7 ? ' actv' : '')}
                  onClick={() => {
                    setActv(7);
                  }}
                >
                  12:30 PM
                </div>
                <div
                  className={'time-item' + (actv == 8 ? ' actv' : '')}
                  onClick={() => {
                    setActv(8);
                  }}
                >
                  01:00 PM
                </div>
              </div>
              <div className="time-row">
                <div
                  className={'time-item' + (actv == 9 ? ' actv' : '')}
                  onClick={() => {
                    setActv(9);
                  }}
                >
                  01:30 PM
                </div>
                <div
                  className={'time-item' + (actv == 10 ? ' actv' : '')}
                  onClick={() => {
                    setActv(10);
                  }}
                >
                  02:00 PM
                </div>
                <div
                  className={'time-item' + (actv == 11 ? ' actv' : '')}
                  onClick={() => {
                    setActv(11);
                  }}
                >
                  02:30 PM
                </div>
              </div>
              <div className="time-row">
                <div
                  className={'time-item' + (actv == 12 ? ' actv' : '')}
                  onClick={() => {
                    setActv(12);
                  }}
                >
                  03:00 PM
                </div>
                <div
                  className={'time-item' + (actv == 13 ? ' actv' : '')}
                  onClick={() => {
                    setActv(13);
                  }}
                >
                  03:30 PM
                </div>
                <div
                  className={'time-item' + (actv == 14 ? ' actv' : '')}
                  onClick={() => {
                    setActv(14);
                  }}
                >
                  04:00 PM
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="book-cons-btn"
          type="submit"
          onClick={() => {
            setDone(1)
          }}
        >
          Book
        </button>
      </div>
    );
}