Export on server zdefra96iapp311.cznet.zeiss.org by using:

D:\S3F-Tools\MongoDB\Server\3.2\bin\mongoexport.exe --db sap_proboard --collection orders            --out production-orders.json --limit 100 --sort "{_id:-1}" --jsonArray
D:\S3F-Tools\MongoDB\Server\3.2\bin\mongoexport.exe --db sap_proboard --collection sales_orders      --out sales-orders.json --limit 100 --sort "{_id:-1}" --jsonArray
D:\S3F-Tools\MongoDB\Server\3.2\bin\mongoexport.exe --db sap_proboard --collection confirmations_sap --out confirmations.json --limit 100 --sort "{_id:-1}" --jsonArray
D:\S3F-Tools\MongoDB\Server\3.2\bin\mongoexport.exe --db sap_proboard --collection deliveries        --out deliveries.json --limit 100 --sort "{_id:-1}" --jsonArray
D:\S3F-Tools\MongoDB\Server\3.2\bin\mongoexport.exe --db sap_proboard --collection planned_orders    --out planned_orders.json --limit 100 --sort "{_id:-1}" --jsonArray