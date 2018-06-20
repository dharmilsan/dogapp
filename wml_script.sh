WML_PID="$(ps aux | grep [w]ml | head -1 | awk {'print $2'})"

if [ -z "$WML_PID" ]; then
  echo "${WML_PID} wml is not running"
elif [ -n "$WML_PID" ]; then
  kill -9 "${WML_PID}"
  echo "${WML_PID} wml pid has been killed"
fi

wml start&
