#!/bin/bash

if [ -f "motor_list.txt" ]; then
    export MOTORS=`cat motor_list.txt`
else
    export MOTORS="[]"
fi

if [ -z "$MOTORS" ]; then
    export MOTORS="[]"
fi

mosquitto_sub -t motors/register | while read -r line;
    do export MOTORS=$(echo $line | jq -c '[.] + (env.MOTORS|fromjson)')
    echo $MOTORS > motor_list.txt
    mosquitto_pub -t motors/list -r -m "$MOTORS"
done
