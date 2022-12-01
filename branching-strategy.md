As of now, we will have 4 branches
### Staging : 
stable and well tested branch and should be deployable all the time for demo purposes to other external users
This is lifelong branch ie never get deleted
### Dev :
less stable, continuous new developments are being merged here...., but still deployable with bugs and should be used for internal demo purposes only.
This is lifelong branch ie never get deleted
### Features1,2,3,:
This should have proper name as per the feature. This should be created from latest copy of dev whenever you start the work on new feature. Once tested locally in end to end manner, merge it back to dev branch and delete this branch.
This is short-lived branch ie get deleted whenever the feature is well tested by the developer/tester in end to end manner
### Feature1/2/3-ui and Feature1/2/3-backend :
To work on any new features, always first create a new feature branch and then you can another branch from that feature branch to work on specific component of that feature such as UI or Backend
give it a proper name and once the work is done and locally tested, should be merged back to feature for end to end testing..., 
This is short-lived branch ie get deleted whenever the feature is well tested by the repective developer

#### Other details:
So, as of now, we should have two endpoints deployed one for staging and one for dev branch.

#### Staging endpoint URL:
```sh
url1
```
#### dev endpoint URL:
```sh
url2
```
