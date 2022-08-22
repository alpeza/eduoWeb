envv="$1"
kill -9 $(lsof -ti:3000)
cd ..
if [[ "$envv" = "tst" ]]; then
    cat .env.local > .env
fi

if [[ "$envv" = "pro" ]]; then
    cat .env.pro > .env
fi

npm run dev