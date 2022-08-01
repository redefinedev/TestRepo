for dir in ./*/
do
	t=${dir%*/}
	cd $t
	npm run test 
	cd ..
done
