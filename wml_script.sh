ps aux | grep [w]ml | head -1 | awk {'print $2'} | xargs kill -9
wml start&
