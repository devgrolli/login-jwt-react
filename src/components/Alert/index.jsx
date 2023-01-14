import React, { useState, useEffect } from "react";
import Alert from '@mui/material/Alert';

export default function AlertToast(props) {  return <Alert severity="error">{props.msg } </Alert> };
