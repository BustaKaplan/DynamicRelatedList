# DynamicRelatedList
DynamicRelatedList is a reusable lightning component that generates a filtered down related list 
to be displayed on the record page. It takes in attributes for the Object, Header, Fields to be displayed, and filter criteria
and builds a dynamic query. Enabling users to use multiple times throughout an org on different object, 
fields and filter criteria. 

# To use:
  1) Use lightning app builder to place on the detail page of a record
  2) Type in the Header you would like to Display- Optional
  3) Type in the API name of the related list you would like to generate -Required
  4) Type in the API names of the 4 fields you would like to show in the related list (in order of appearance)-Required
  5) Enter the filter criteria you would like applied 
      ex: RecordTypeId = '0122E000000KkJjQAK' or Origin = 'Web' DON'T FORGET THE SINGLE QUOTES
  6) Save and activate page

