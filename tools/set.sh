envv="$1"
cd ..
if [[ "$envv" = "tst" ]]; then
    cat .env.local > .env
fi

if [[ "$envv" = "pro" ]]; then
    cat .env.pro > .env
fi

npm run dev