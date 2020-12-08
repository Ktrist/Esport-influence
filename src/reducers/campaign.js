export default function (campaignList = [], action) {

    if (action.type == 'addCampaign') {
        var campaignListCopy = [...campaignList]

        campaignListCopy.push(action.campaignAdded)
        
        return campaignListCopy
    }
    else {
        return campaignList
    }
}