URL=$1
MINLENGTH=$2

echo $URL - Testing

HEADERS=$(curl -sI $URL)

echo $HEADERS

if [ -z "$HEADERS" ] ; then
  echo $URL - No response
  exit 1
fi

STATUS=$(head -1 <<< "$HEADERS")
echo $STATUS
if ! grep -q "200 OK" <<< "$HEADERS" ; then
  echo $URL - Unexpected status code: $STATUS
  exit 1
fi

LENGTH=$(grep -i content-length <<< "$HEADERS" | awk '{print $2}' | tr -d '\r')
echo $LENGTH
if [ "$LENGTH" -lt "$MINLENGTH" ] ; then
  echo $URL - Content length too small: $LENGTH
  exit 1
fi

echo $URL - OK
