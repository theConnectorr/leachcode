export const headers = {
	Accept: "*/*",
	Referer: "https://leetcode.com",
	Origin: "https://leetcode.com",
	"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36 Edg/127.0.0.0",
	"X-csrftoken": "BVH1WUZE3JAAwjHYFY0sFsOr91sl5Je1DqWZiOtd1RRqvVdjFYztNjKqeDEXlW6Y",
	"Sec-Fetch-Mode": "cors",
	"Content-Type": "application/json",
};

export const userPublicProfile = (user) => Object({
	"query": "\n    query userPublicProfile($username: String!) {\n  matchedUser(username: $username) {\n    contestBadge {\n      name\n      expired\n      hoverText\n      icon\n    }\n    username\n    githubUrl\n    twitterUrl\n    linkedinUrl\n    profile {\n      ranking\n      userAvatar\n      realName\n      aboutMe\n      school\n      websites\n      countryName\n      company\n      jobTitle\n      skillTags\n      postViewCount\n      postViewCountDiff\n      reputation\n      reputationDiff\n      solutionCount\n      solutionCountDiff\n      categoryDiscussCount\n      categoryDiscussCountDiff\n    }\n  }\n}\n    ",
	"variables": {
		"username": user
	},
	"operationName": "userPublicProfile"
});

export const userStats = (user) => Object({
	"operationName": "userProfileUserQuestionProgressV2",
	"query": `query userProfileUserQuestionProgressV2($userSlug: String!) {
  userProfileUserQuestionProgressV2(userSlug: $userSlug) {
    numAcceptedQuestions {
      count
      difficulty
    }
    numFailedQuestions {
      count
      difficulty
    }
    numUntouchedQuestions {
      count
      difficulty
    }
    userSessionBeatsPercentage {
      difficulty
      percentage
    }
  }
}`,
	"variables": {
		"userSlug": user
	}
});

export const languageStats = (user) => Object({
	"query": "\n    query languageStats($username: String!) {\n  matchedUser(username: $username) {\n    languageProblemCount {\n      languageName\n      problemsSolved\n    }\n  }\n}\n    ",
	"variables": {
		"username": user
	},
	"operationName": "languageStats"
})

export const skillStats = (user) => Object({
	"query": "\n    query skillStats($username: String!) {\n  matchedUser(username: $username) {\n    tagProblemCounts {\n      advanced {\n        tagName\n        tagSlug\n        problemsSolved\n      }\n      intermediate {\n        tagName\n        tagSlug\n        problemsSolved\n      }\n      fundamental {\n        tagName\n        tagSlug\n        problemsSolved\n      }\n    }\n  }\n}\n    ",
	"variables": {
		"username": user
	},
	"operationName": "skillStats"
})

export const userContestRatingInfo = (user) => Object({
	"query": "\n    query userContestRankingInfo($username: String!) {\n  userContestRanking(username: $username) {\n    attendedContestsCount\n    rating\n    globalRanking\n    totalParticipants\n    topPercentage\n    badge {\n      name\n    }\n  }\n  userContestRankingHistory(username: $username) {\n    attended\n    trendDirection\n    problemsSolved\n    totalProblems\n    finishTimeInSeconds\n    rating\n    ranking\n    contest {\n      title\n      startTime\n    }\n  }\n}\n    ",
	"variables": {
		"username": user
	},
	"operationName": "userContestRankingInfo"
});

export const userProgessV2 = (user) => Object({
	"query": "\n    query userProfileUserQuestionProgressV2($userSlug: String!) {\n  userProfileUserQuestionProgressV2(userSlug: $userSlug) {\n    numAcceptedQuestions {\n      count\n      difficulty\n    }\n    numFailedQuestions {\n      count\n      difficulty\n    }\n    numUntouchedQuestions {\n      count\n      difficulty\n    }\n    userSessionBeatsPercentage {\n      difficulty\n      percentage\n    }\n  }\n}\n    ",
	"variables": {
		"userSlug": user
	},
	"operationName": "userProfileUserQuestionProgressV2"
})

export const userSessionProgress = (user) => Object({
	"query": "\n    query userSessionProgress($username: String!) {\n  allQuestionsCount {\n    difficulty\n    count\n  }\n  matchedUser(username: $username) {\n    submitStats {\n      acSubmissionNum {\n        difficulty\n        count\n        submissions\n      }\n      totalSubmissionNum {\n        difficulty\n        count\n        submissions\n      }\n    }\n  }\n}\n    ",
	"variables": {
		"username": user
	},
	"operationName": "userSessionProgress"
});

export const userBadges = (user) => Object({
	"query": "\n    query userBadges($username: String!) {\n  matchedUser(username: $username) {\n    badges {\n      id\n      name\n      shortName\n      displayName\n      icon\n      hoverText\n      medal {\n        slug\n        config {\n          iconGif\n          iconGifBackground\n        }\n      }\n      creationDate\n      category\n    }\n    upcomingBadges {\n      name\n      icon\n      progress\n    }\n  }\n}\n    ",
	"variables": {
		"username": user
	},
	"operationName": "userBadges"
});

export const userProfileCalendar = (user) => Object({
	"query": "\n    query userProfileCalendar($username: String!, $year: Int) {\n  matchedUser(username: $username) {\n    userCalendar(year: $year) {\n      activeYears\n      streak\n      totalActiveDays\n      dccBadges {\n        timestamp\n        badge {\n          name\n          icon\n        }\n      }\n      submissionCalendar\n    }\n  }\n}\n    ",
	"variables": {
		"username": user
	},
	"operationName": "userProfileCalendar"
});

export const recentAcSubmissions = (user, limit) => Object({
	"query": "\n    query recentAcSubmissions($username: String!, $limit: Int!) {\n  recentAcSubmissionList(username: $username, limit: $limit) {\n    id\n    title\n    titleSlug\n    timestamp\n  }\n}\n    ",
	"variables": {
		"username": user,
		"limit": limit
	},
	"operationName": "recentAcSubmissions"
})

export const dailyChallenge = {
	"query": "\n    query questionOfToday {\n  activeDailyCodingChallengeQuestion {\n    date\n    userStatus\n    link\n    question {\n      acRate\n      difficulty\n      freqBar\n      frontendQuestionId: questionFrontendId\n      isFavor\n      paidOnly: isPaidOnly\n      status\n      title\n      titleSlug\n      hasVideoSolution\n      hasSolution\n      topicTags {\n        name\n        id\n        slug\n      }\n    }\n  }\n}\n    ",
	"variables": {},
	"operationName": "questionOfToday"
}

export const contestRatingHistogram = {
	"query": "\n    query contestRatingHistogram {\n  contestRatingHistogram {\n    userCount\n    ratingStart\n    ratingEnd\n    topPercentage\n  }\n}\n    ",
	"variables": {},
	"operationName": "contestRatingHistogram"
}
